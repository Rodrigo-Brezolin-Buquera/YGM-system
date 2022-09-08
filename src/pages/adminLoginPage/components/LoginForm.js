import React, { useState } from 'react'
import { Form, BoxContainer } from ".././styled"
import { login } from '../../../services/firebase/auth';
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button
} from "@chakra-ui/react";
import { goToAdmin, goToUser } from '../../../routes/coordinator';

export const LoginForm = ({ history }) => {
  const [loading, setLoading] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (values) => {
    await login(values, history, goToAdmin, setLoading)
    reset()
  }

  return (
    <BoxContainer>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <FormControl isInvalid={errors.email || errors.password}>
          <Input
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Campo obrigatório",
            })}
          />

          <Input
            id="password"
            placeholder="Senha"
            {...register("password", {
              required: "Campo obrigatório",
            })}
          />

          <Button
            mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit"
          >
            Login
          </Button>
          <FormErrorMessage>
            {errors.email && errors.email.message}
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
      </Form>
    </BoxContainer>
  )
}

