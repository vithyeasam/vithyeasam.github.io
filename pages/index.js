import react from "react";
import Layout from "../components/Layout/Layout";
import Script from "next/script";
// import { gql } from "@apollo/client";
// import client from "./api/apollo_client";

export default function Home() {
  // async function getData() {
  //   try { const { data } = await client.query({
  //     query: gql`
  //       query DepartmentList {
  //         departmentList(companyId: 1) {
  //           id
  //           name
  //         }
  //       }
  //     `,
  //   });
  //   console.log("hello", data);
  // } catch(e) {
  //   console.log(e.networkError?.result.errors);
  // }
  // }
  // getData();
  return (
    <Layout>
      <Script
        src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"
        type="text/javascript"
      ></Script>
      {/* <Script type="text/javascript" src="assets/js/jquery/jquery.min.js" ></Script> */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
        integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></Script>
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      <Script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/graingert-wow/1.2.2/wow.js"
      ></Script>
      <Script src="https://cdn.jsdelivr.net/npm/jquery.counterup@2.1.0/jquery.counterup.min.js"></Script>
      <Script
        type="text/javascript"
        src="assets/js/bootstrap/popper.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="assets/js/bootstrap/bootstrap.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="assets/js/plugins/plugins.min.js"
      ></Script>
      <Script type="text/javascript" src="assets/js/active.js"></Script>
    </Layout>
  );
}
