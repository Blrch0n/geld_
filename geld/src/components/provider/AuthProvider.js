"use client";

import { api } from "@/common/axios";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [isReadyCategory, setIsReadyCategory] = useState(false);
  const [isReadyRecord, setIsReadyRecord] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryData, setCategoryData] = useState();
  const [recordData, setRecordData] = useState();

  const router = useRouter();

  const signIn = async (email, password) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("/sign-in", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      console.log(token);

      setIsLoggedIn(true);

      showCategory();

      router.push("/dashboard");
      // showOn();
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (name, email, password) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("/sign-up", {
        name,
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      showCategory();

      router.push("/dashboard");
      // showOn();
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const signOut = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);

    router.push("/");
  };
  const addCategory = async (categoryName) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.post(
        "/category",
        {
          categoryName,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      showCategory();
    } catch (err) {
      console.log(err);
    }
  };
  const addRecord_ = async (
    amount,
    date,
    isExpense,
    selectedCategory,
    time
  ) => {
    try {
      const token = localStorage.getItem("token");
      const {data} = await api.post(
        "/records",
        {
          amount,
          date,
          isExpense,
          selectedCategory,
          time,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      showRecords();
    } catch (err) {
      console.log(err);
    }
  };
  const showCategory = async () => {
    setIsReadyCategory(false);
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/category", {
        headers: {
          Authorization: token,
        },
      });
      const { userCategory } = data;

      setCategoryData(userCategory.reverse());
      setIsReadyCategory(true);
    } catch (err) {
      console.log(err);
    }
  };
  const showRecords = async () => {
    setIsReadyRecord(false);
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/records", {
        headers: {
          Authorization: token,
        },
      });
      const { records } = data;
      console.log(records);

      setRecordData(records.reverse());
      setIsReadyRecord(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setIsReady(false);

    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

    setIsReady(true);

    // showOn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        showRecords,
        addCategory,
        addRecord_,
        recordData,
        isReadyRecord,
        isReadyCategory,
        categoryData,
        isLoggedIn,
        isLoading,
      }}
    >
      {isReady && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
