import { createContext, useReducer } from "react";
import LoginForm from "../features/user/LoginForm";
import SignUpForm from "../features/user/SignupForm";
import { Hourglass } from "react-loader-spinner";
import ChatModal from "../features/chat/ChatModal";
import ChatContextProvider from "./ChatContext";
import AddressForm from "../features/order/AddressForm";
import EditProduct from "../pages/EditProduct";
import ConfirmDeleteProduct from "../features/product/ConfirmDeleteProduct";
import BidForm from "../features/bid/BidForm";
import BidContextProvider from "./BidContext";
import RedirectIfAuthen from "../components/RedirectIfAuthen";
import BidPayModal from "../features/bid/BidPayModal";
import BidFailedModal from "../features/bid/BidFailedModal";

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

    case "confirmDelete":
      return { ...state, form: <ConfirmDeleteProduct /> };
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
    case "chat":
      return {
        ...state,
        form: (
          <ChatContextProvider talkTo={action.payload}>
            <ChatModal />
          </ChatContextProvider>
        ),
      };
    case "address":
      return { ...state, form: <AddressForm /> };

    case "bid":
      return {
        ...state,
        form: (
          <RedirectIfAuthen>
            <BidContextProvider>
              <BidForm />
            </BidContextProvider>
          </RedirectIfAuthen>
        ),
      };
    case "bidPay":
      return {
        ...state,
        form: (
          <RedirectIfAuthen>
            <BidPayModal obj={action.payload} />
          </RedirectIfAuthen>
        ),
      };
    case "bidFailed":
      return {
        ...state,
        form: (
          <RedirectIfAuthen>
            <BidFailedModal />
          </RedirectIfAuthen>
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
