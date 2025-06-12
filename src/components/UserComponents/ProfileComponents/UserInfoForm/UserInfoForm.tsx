"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import { userInfoFields } from "@/utils";
import { validateUserInfo } from "@/helpers";
import { useUserStore } from "@/store";
import { ChangePasswordModal, ChangePasswordButton, UserInfoFormField } from "@/components";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner/LoadingSpinner";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const UserInfoForm = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { user, isLoading } = useUserStore();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  if (isLoading || showLoader) {
    return <LoadingSpinner mode="principal" hover />;
  }
  if (!user) return null;

  return (
    <>
      <Formik
        initialValues={{
          email: user.email || "",
          dni: user.dni || "",
          city: user.address || "",
          phone: user.phone || "",
          birthdate: user.birthdate?.split("T")[0] || "",
        }}
        validationSchema={validateUserInfo}
        onSubmit={async (values, actions) => {
          console.log(values);
          await new Promise((res) => setTimeout(res, 1000));
          actions.setSubmitting(false);
        }}
      >
        {() => (
          <>
            <motion.div
              className="mt-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Form>
                <motion.div className="grid gap-y-6 gap-x-4 sm:mt-14 sm:h-[300px] sm:grid-cols-2 md:grid-cols-3">
                  {userInfoFields.map((field) => (
                    <motion.div key={field.name} variants={itemVariants}>
                      <UserInfoFormField {...field} />
                    </motion.div>
                  ))}
                </motion.div>
              </Form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ChangePasswordButton onOpen={openModal} />
            </motion.div>
          </>
        )}
      </Formik>
      {isOpenModal && <ChangePasswordModal onClose={closeModal} />}
    </>
  );
};
