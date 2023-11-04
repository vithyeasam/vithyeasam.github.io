import { gql, useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styles from "./singup.module.css";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type CompanyInput = {
  name: String;
  exchangeRate: String;
  closePayrollDate: Number;
};

const VERIFY_REGISTER = gql`
  mutation verifyUserWithCreateCompany(
    $token: String!
    $verifyNumber: String!
    $data: CompanyInput
  ) {
    verifyUserWithCreateCompany(
      token: $token
      verifyNumber: $verifyNumber
      data: $data
    ) {
      token
    }
  }
`;

export default function Verify() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const item = localStorage.getItem("token");
    setToken(item);
  }, []);
  const [done, setDone] = useState<boolean>(false);
  const [verifyNumber, setVerifyNumber] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [closePayrollDate, setClosePayrollFate] = useState(1);
  const [name, setName] = useState("");
  const [toVerify, { error }] = useMutation(VERIFY_REGISTER);
  async function onVerified(event) {
    event.preventDefault();
    // the mutate function also doesn't return a promise
    await toVerify({
      variables: {
        token,
        verifyNumber,
        data: { exchangeRate, closePayrollDate, name },
      },
    })
      .then(() => setDone(true))
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.body}>
      <div className={styles.signupFrm}>
        <form
          action=""
          method="post"
          className={styles.form}
          onSubmit={onVerified}
        >
          <div className={styles.title}>
            <img src="/assets/img/logo/klahan-logos.png" alt="" />
            {/* <p>A journey of your career starting with Klahan.</p> */}
          </div>
          {done ? (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faCircleCheck as IconProp}
                  style={{ fontSize: 100, color: "green" }}
                />
              </div>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                Register done!
              </p>
            </>
          ) : (
            <>
              <div className={styles.inputContainer}>
                <label htmlFor="verify" className={styles.label}>
                  Verify Code:
                </label>
                <input
                  type="text"
                  id="verify"
                  name="verify"
                  className={styles.input}
                  value={verifyNumber}
                  onChange={(e) => setVerifyNumber(e.currentTarget.value)}
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="name" className={styles.label}>
                  Company Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="payroll" className={styles.label}>
                  Close Payroll Date:
                </label>
                <input
                  type="number"
                  id="payroll"
                  name="payroll"
                  className={styles.input}
                  value={closePayrollDate}
                  onChange={(e) =>
                    setClosePayrollFate(Number(e.currentTarget.value))
                  }
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="rate" className={styles.label}>
                  Exchange Rate:
                </label>
                <input
                  type="text"
                  id="rate"
                  name="rate"
                  className={styles.input}
                  value={exchangeRate}
                  onChange={(e) => setExchangeRate(e.currentTarget.value)}
                />
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                style={
                  !(exchangeRate && verifyNumber && name && closePayrollDate)
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "blue" }
                }
                disabled={
                  !(exchangeRate && verifyNumber && name && closePayrollDate)
                }
              >
                Submit
              </button>
              {error ? <p style={{ color: "red" }}>{error.message}</p> : ""}
            </>
          )}
        </form>
      </div>
    </div>
  );
}
