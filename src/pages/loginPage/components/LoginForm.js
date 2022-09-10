import React, { useState } from 'react'
import { Form, BoxContainer, InputContainer } from "./styled"
import { login } from '../../../services/firebase/auth';
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button
} from "@chakra-ui/react";
import { goToUser } from '../../../routes/coordinator';

export const LoginForm = ({ history }) => {
  const [loading, setLoading] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (values) => {
    await login(values, history, goToUser, setLoading)
    reset()
  }

  return (
    <BoxContainer>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <FormControl isInvalid={errors.email || errors.password}>
          <InputContainer>
          <Input
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Campo obrigatório",
            })}
            variant="outline"
            
          />

          <Input
            id="password"
            placeholder="Senha"
            {...register("password", {
              required: "Campo obrigatório",
            })}
            variant="outline"
            type= 'password'
          />

          <Button
            mt={4} colorScheme="yellow" isLoading={isSubmitting} type="submit"
          >
            Login
          </Button>
          </InputContainer>
          <FormErrorMessage>
            {errors.email && errors.email.message}
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
      </Form>
    </BoxContainer>
  )
}

