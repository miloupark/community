import { getSecureStore } from "@/utils/secureStore";
import axiosInstance from "./axios";
import { Profile } from "@/types";

type RequestUser = {
  email: string;
  password: string;
};

// 회원가입
async function postSignup(body: RequestUser): Promise<void> {
  const { data } = await axiosInstance.post("/auth/signUp", body);

  return data;
}

// 로그인
async function postLogin(body: RequestUser): Promise<{ accessToken: string }> {
  const { data } = await axiosInstance.post("/auth/signin", body);

  return data;
}

// 내 정보
async function getMe(): Promise<Profile> {
  const accessToken = await getSecureStore("accessToken");
  const { data } = await axiosInstance.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
}

export { postSignup, postLogin, getMe };
