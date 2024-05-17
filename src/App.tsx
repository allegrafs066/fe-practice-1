import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-[#dadbf1] pt-24 pb-48 flex flex-col justify-center items-center">
          <p className="text-7xl">How can we help?</p>
          <div>
            <form action="">
              <input
                className="bg-white border-black border rounded-md shadow-xl w-[48rem] h-16 mt-16 pl-4 text-xl"
                type="text"
                placeholder="Search"
              />
              <svg
                data-name="1-Arrow Up"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-10 rotate-90 relative -translate-y-[3.2rem] left-[44rem] hover:fill-blue-500"
              >
                <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
              </svg>
            </form>
          </div>
        </div>
        <div className="flex justify-between p-48 space-x-24">
          <div className="flex-col space-y-48">
            <Card
              img="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png"
              alt="using_abstract"
              title="Using Abstract"
              content="Abstract lets you manage, version, and document your designs in one place."
              link=""
            />
            <Card
              img="https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png"
              alt="manage"
              title="Manage organizations, teams, and projects"
              content="Use Abstract organizations, teams, and projects to organize your people and your work."
              link=""
            />
            <Card
              img="https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png"
              alt="authenticate"
              title="Authenticate to Abstract"
              content="Set up and configure SSO, SCIM, and Just-in-Time provisioning."
              link=""
            />
          </div>
          <div className="flex-col space-y-48">
            <Card
              img="https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png"
              alt="manage_account"
              title="Manage your account"
              content="Configure your account settings, such as your email, profile details, and password."
              link=""
            />
            <Card
              img="https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png"
              alt="manage_billing"
              title="Manage billing"
              content="Change subscriptions and payment details."
              link=""
            />

            <Card
              img="https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png"
              alt="abstract_support"
              title="Abstract support"
              content="Get in touch with a human."
              link=""
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
