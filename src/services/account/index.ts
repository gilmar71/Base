import { AxiosResponse } from "axios";
import { SignInData, User } from "src/contexts/Auth/authContext";
import { api } from "src/services/api";

export interface PayloadChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface CreateAccountProps {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  birthday: string;
  passwordConfirmation: string;
  gender: string;
}

async function AccountChangePassword(payload: PayloadChangePassword, SignIn: (data: SignInData) => Promise<AxiosResponse<any> | undefined>, user: User | null) {
  try {
    const { data } = await api.post("/account/change-password", payload);


    if(user)
    await SignIn({
      email: user.email,
      password: payload.confirmNewPassword,
    })

    return data;
  } catch (err) {
    throw err;
  }
}


async function AccountCreate(payload: CreateAccountProps) {
  try {
    const { data } = await api.post("/account/create", payload);

    if (data.status === 200 || data.status === 201) {
      return data;
    }

    throw data;
  } catch (err) {
    throw err;
  }
}

export { AccountChangePassword, AccountCreate };
