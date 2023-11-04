import React, { useState } from "react";
import styles from "./singup.module.css";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

export type Gender = "MALE" | "FEMALE";

const REGISTER = gql`
  mutation requestRegisterVerification(
    $name: String!
    $phoneNumber: String!
    $password: String!
    $dob: String
    $gender: Gender
  ) {
    requestRegisterVerification(
      name: $name
      phoneNumber: $phoneNumber
      password: $password
      dob: $dob
      gender: $gender
    ) {
      token
    }
  }
`;

export default function SingUp() {
  const router = useRouter();
  const [toRegister, { error }] = useMutation(REGISTER);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState<Gender>("MALE");
  const arr = { name, phoneNumber, dob, password, gender };
  // console.log("data", arr);

  async function onRegistered(event) {
    event.preventDefault();
    // the mutate function also doesn't return a promise
    await toRegister({
      variables: { name, phoneNumber, password, dob, gender },
    })
      .then((res) => {
        if (res.errors) {
          return error;
        } else {
          // console.log(res.data);
          localStorage.setItem(
            "token",
            res.data.requestRegisterVerification.token
          );
          router.push("/verify");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.body}>
      <div className={styles.signupFrm}>
        <form method="post" className={styles.form} onSubmit={onRegistered}>
          <div className={styles.title}>
            <img src="/assets/img/logo/klahan-logos.png" alt="" />
            {/* <p>A journey of your career starting with Klahan.</p> */}
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="first" className={styles.label}>
              Phone Number:
            </label>
            <input
              value={phoneNumber}
              type="text"
              id="first"
              name="first"
              className={styles.input}
              onChange={(e) => setPhoneNumber(e.currentTarget.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="last" className={styles.label}>
              Password:
            </label>
            <input
              type="text"
              id="last"
              name="pass"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="full" className={styles.label}>
              Full Name:
            </label>
            <input
              type="text"
              id="full"
              name="name"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="dob" className={styles.label}>
              Date of Birth:
            </label>
            <input
              className={styles.input}
              value={dob}
              onChange={(e) => setDob(e.currentTarget.value)}
              type="date"
              id="dob"
              name="dob"
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="gender" className={styles.label}>
              Gender:
            </label>
            <select
              className={styles.input}
              value={gender}
              onChange={(e) => {
                setGender(e.target.value as Gender);
              }}
            >
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </select>
          </div>
          <button
            className={styles.submitBtn}
            style={
              !(password && phoneNumber && dob && gender && name)
                ? { backgroundColor: "gray" }
                : { backgroundColor: "blue" }
            }
            disabled={!(password && phoneNumber && dob && gender && name)}
            type="submit"
          >
            {/* <Link href="/verify" passHref> */}
            Register
            {/* </Link> */}
          </button>
          {error ? <p style={{ color: "red" }}>{error.message}</p> : ""}
        </form>
      </div>
    </div>
  );
}
