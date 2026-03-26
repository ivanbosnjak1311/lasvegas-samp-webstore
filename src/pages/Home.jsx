import { useEffect } from "react";
import MainLayout from "../components/MainLayout";

export default function Home() {
  useEffect(() => {
    document.title = "Las Vegas | Welcome";
  }, []);
  return (
    <MainLayout>
      <p>
        Dobrodošli na <b>Las Vegas Electron</b>.<br /><br />
        Ukoliko želite da kupite paket prvo{" "}
        <a href="/login">morate da se prijavite</a>. Nakon toga potrebno je da<br />
        odaberete sekciju i produkt koji želite da kupite.
        <br /><br />
        Ukoliko vam je potrebna bilo kakva pomoć obratite se putem facebook poruke na<br />
        <a href="https://www.facebook.com/lasvegassamp" target="_blank">
          Las Vegas Community
        </a>{" "}
        ili putem topica na forumu (
        <a
          href="https://lasvegas-hq.info/forum/index.php?/forum/42-lv-server-donacije/"
          target="_blank"
        >
          Pitanja za donacije
        </a>
        ).
        <br />
        <br></br>
        U opisu paketa možete pronaći potrebne informacije o načinu aktivacije paketa koji <br />ste kupili.<br />
        <br />
      </p>
    </MainLayout>
  );
}