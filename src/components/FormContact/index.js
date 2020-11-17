import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
// import api from "../../services/api";
import RippleButton from "../RippleButton";

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
      .map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      })
      .join("&");
    xhr.send(encoded);
  }

  const data = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    description: Yup.string().required(),
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
          multiline="10"
          name="description"
          type="text"
          label="Description: "
          style={{ resize: "vertical", height: "60px" }}
        />

        <RippleButton type="submit">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="paper-plane"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="12px"
          >
            <path
              fill="currentColor"
              d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
            ></path>
          </svg>
          &nbsp;Send
        </RippleButton>
      </Form>
    </>
  );
}
