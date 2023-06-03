import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

const URL =
  "https://react-http-backend-16718-default-rtdb.firebaseio.com/cart.json";

export const getCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      return data;
    };

    try {
        const cartData = await fetchData();
        dispatch(cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity
        }));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(URL, {
        method: "PUT",
        body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed!",
        })
      );
    }
  };
};
