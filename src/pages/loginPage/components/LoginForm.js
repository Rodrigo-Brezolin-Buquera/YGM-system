import React, { useState } from 'react'
import { Form, BoxContainer, InputContainer } from "./styled"
import { login } from '../../../services/firebase/auth';
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button, Text, CircularProgress
} from "@chakra-ui/react";

export const LoginForm = ({ history }) => {
  const [loading, setLoading] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (values) => {
    setLoading(true)
    await login(values, history, setLoading)
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
              type='password'
            />

            <Button
              mt={4} colorScheme="yellow" isLoading={isSubmitting} type="submit"
            >
              {loading ?
                <CircularProgress isIndeterminate color="gray.400" size="40px" />
                : <Text>Login</Text>}
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

