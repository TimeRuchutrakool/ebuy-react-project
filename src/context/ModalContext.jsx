import { createContext, useReducer } from "react";
import LoginForm from "../features/user/LoginForm";
import SignUpForm from "../features/user/SignupForm";
import { Hourglass } from "react-loader-spinner";

export const ModalContext = createContext();

const initialState = {
  form: undefined,
};
function reducer(state, action) {
  switch (action.type) {
    case "close":
      return { ...state, form: undefined };
    case "login":
      return { ...state, form: <LoginForm /> };
    case "signup":
      return { ...state, form: <SignUpForm /> };
    case "loading":
      return {
        ...state,
        form: (
          <div
            style={{ minHeight: "35vh" }}
            className="flex justify-center items-center"
          >
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#007a12", "#00ab0b"]}
            />
          </div>
        ),
      };

    default:
      throw new Error("Unknown action");
  }
}

export function ModalContextProvider({ children }) {
  const [formModal, dispatch] = useReducer(reducer, initialState);
  return (
    <ModalContext.Provider value={{ formModal, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
}
