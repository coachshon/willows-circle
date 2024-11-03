"use server";

import { useTranslation } from "@/i18n";
import { fetchApi } from "@/actions/fetchApi";

export async function createUser(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const { i18n } = await useTranslation("translation");
  const thankyou = i18n.t("home.support.thankyou");

  const existsMessage = i18n.t("home.support.exists");
  const email = formData.get("email");

  // Check if user with this email already exists
  const existingUser = await fetchApi(
    `tables/Users/records?filter={"Email": ["${email}"]}`
  );

  if (existingUser.records && existingUser.records.length > 0) {
    // User with this email already exists
    return { message: `${existsMessage} ${email}` };
  }

  // Grist requires `body.records` to be an array of objects
  const rawFormData = {
    records: [
      {
        fields: {
          Email: email,
        },
      },
    ],
  };
  // mutate data
  try {
    await fetchApi("tables/Users/records", "POST", rawFormData);
    return { message: `${thankyou} ${email} ` };
  } catch (e) {
    return { message: "" };
  }
}
