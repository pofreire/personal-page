import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { BtnSearch } from "../styles";
import api from "../../services/api";

export default function FormContact() {
  async function handleSubmit(data) {
    const xhr = new XMLHttpRequest();

    xhr.open(
      "POST",
      "https://script.google.com/macros/s/AKfycbx6ftZkC5Yb_14eNvhZK_ZusfnS-kpXt81CtehZ4RnUhSKEXGU/exec"
    );
    // xhr.withCredentials = true;

    xhr.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin",
      "'*'"
    );

    // xhr.onreadystatechange = function() {
    //     // form.reset();
    //  mudar p código de suss
    //     return;
    // };
    // url encode form data for sending as post data
    var encoded = Object.keys(data)
      .map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      })
      .join("&");
    xhr.send(encoded);
  }

  const data = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    description: Yup.string().required()
  });

  return (
    <>
      <Form schema={data} onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          label="Name: "
          placeholder="Ex:. Pedro"
        />

        <Input
          name="email"
          type="email"
          label="E-mail: "
          placeholder="Ex:. 30freire@gmail.com"
          autoComplete="false"
        />

        <Input
          multiline="3"
          name="description"
          type="text"
          label="Description: "
        />

        <button type="submit">Send</button>
      </Form>
    </>
  );
}
