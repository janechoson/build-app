import { useBaseFetch } from "~/composables/useBaseFetch";
import { setCookieAuth } from "~/utils";
import { Endpoint } from "~/utils/endpoint";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    data: "",
  }),
  actions: {
    async handleGetProfile(token: string) {
      const router = useRouter();
      const { data, error } = await useBaseFetch(Endpoint.GetProfile, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (error.value?.data) {
        throw error.value?.data;
      } else {
        const profile = data.value;
        if (profile) {
          router.push("/");
        }
      }
    },

    async handleSignIn(body: any) {
      const { data, error } = await useBaseFetch(Endpoint.AuthLogin, {
        method: "POST",
        body,
      });
      if (error.value?.data) {
        throw error.value?.data;
      } else {
        const response = data.value;
        setCookieAuth(response.token);
        this.handleGetProfile(response.token);
      }
    },
  },
});
