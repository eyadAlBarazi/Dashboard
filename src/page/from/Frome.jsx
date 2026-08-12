// import React from 'react'v

import { Alert, Button, Snackbar, Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Header from "../../component/Header";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "User",
    label: "User",
  },
  {
    value: "Manger",
    label: "Manger",
  },
];

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const PhoneNumber =
  /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

function Frome() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    handleClick();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Header title={"creat user"} discription={"create a New User Profile"} />
      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          error={errors.firstName}
          {...register("firstName", { required: true, minLength: 3 })}
          helperText={errors.firstName ? "this is required" : null}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={errors.lastName}
          {...register("lastName", { required: true, minLength: 3 })}
          helperText={errors.lastName ? "this is required" : null}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={errors.Email}
        {...register("Email", {
          required: true,
          pattern: regEmail,
        })}
        helperText={errors.Email ? "please provid a valid email address" : null}
        label="Email"
        variant="filled"
      />

      <TextField
        error={errors.PhoneNumber}
        {...register("PhoneNumber", {
          required: true,
          pattern: PhoneNumber,
        })}
        helperText={
          errors.PhoneNumber ? "please provid a valid PhoneNumber" : null
        }
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        variant="filled"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="This Snackbar will be dismissed in 5 seconds."
        >
          <Alert onClose={handleClose} variant="filled" severity="info">
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}

export default Frome;
