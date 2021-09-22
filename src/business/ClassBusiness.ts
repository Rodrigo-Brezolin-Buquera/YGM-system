import moment from "moment"
import { ClassDatabase } from "../data/ClassDatabase"
import { CustomError } from "../error/customError"
import { classDataDTO, classDeleteDTO, classEditDTO, classSearchDTO, classTokenDTO, YogaClass } from "../model/YogaClass"
import { AuthenticationData, Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { ClassVerifications } from "../verifications/ClassVerifications"

const classDataBase = new ClassDatabase()
const classVerifications = new ClassVerifications()
const authenticator = new Authenticator()
const idGenerator = new IdGenerator()

export class ClassBusiness {

    public async findAllClasses({ token }: classTokenDTO): Promise<YogaClass[]> {
        try {
            classVerifications.checkToken(token)
            const authentication: AuthenticationData = authenticator.getData(token)
            classVerifications.checkIfIsUser(authentication.role)

            const yogaClasses: YogaClass[] = await classDataBase.getAllClasses()

            return yogaClasses
        } catch (error) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public async findClassById({ token, id }: classSearchDTO): Promise<YogaClass> {
        try {
            classVerifications
                .checkToken(token)
                .checkID(id)

            const authentication: AuthenticationData = authenticator.getData(token)
            classVerifications.checkIfIsUser(authentication.role)

            const yogaClass: YogaClass = await classDataBase.getClass(id)

            return yogaClass
        } catch (error) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public async createClass(input: classDataDTO): Promise<void> {
        try {
            const { name, startingDate, day, time, teacher, token } = input

            classVerifications
                .checkToken(token)
                .checkName(name)
                .checkDate(startingDate)
                .checkDay(day)
                .checkTime(time)
                .checkTeacher(teacher)

            const authentication: AuthenticationData = authenticator.getData(token)
            classVerifications.checkIfIsAdmin(authentication.role)

            const timestamp = new Date(startingDate).getTime()
            const weeks: number = 50
            const aWeekInMilliseconds: number = 604800000
            const groupID: string = idGenerator.generateId()

            for (let w: number = 0; w < weeks; w++) {
                const id = idGenerator.generateId()

                const classTimeStamp: number = timestamp + aWeekInMilliseconds * w
                const newDate = new Date(classTimeStamp)
                const classDate: any = moment(newDate).format("YYYY-MM-DD")  //acho que esta redundante, pois já vem do front certo

                const newClass = new YogaClass(id, name, classDate, day, time, teacher, groupID)

                await classDataBase.createClass(newClass)
            }

        } catch (error) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public async editClass(input: classEditDTO): Promise<void> {
        try {
            const { name, startingDate, day, time, teacher, token, groupId } = input

            classVerifications
                .checkToken(token)
                .checkName(name)
                .checkDate(startingDate)
                .checkDay(day)
                .checkTime(time)
                .checkTeacher(teacher)

            const authentication: AuthenticationData = authenticator.getData(token)
            classVerifications.checkIfIsAdmin(authentication.role)

            const timestamp = new Date(startingDate).getTime()
            const classDate: any = moment(timestamp).format("YYYY-MM-DD")

            const newGroupId: string = `${name}-${day}-${time}`
            const newClass = new YogaClass("no ID", name, classDate, day, time, teacher, newGroupId)

            await classDataBase.editClass(newClass, groupId)
        } catch (error) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public async deleteClass({ token, groupId }: classDeleteDTO): Promise<void> {
        try {
            classVerifications
                .checkToken(token)
                .checkID(groupId)

            const authentication: AuthenticationData = authenticator.getData(token)
            classVerifications.checkIfIsAdmin(authentication.role)

            await classDataBase.deleteClass(groupId)
        } catch (error) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }


}