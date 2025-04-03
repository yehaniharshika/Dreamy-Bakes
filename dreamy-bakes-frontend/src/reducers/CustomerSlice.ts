import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
import { Customer } from "../models/Customer";

export const initialState: Customer[] = [];

const api = axios.create({
    baseURL : "http://localhost:3003/nurse",
});

/*Add nurse*/
export const saveCustomer = createAsyncThunk(
    "customer/saveCustomer",
    async (formData : FormData) => {
        const token = localStorage.getItem("accessToken");
        try {
            const response = await api.post('/add' , formData , {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });
            Swal.fire({
                title: "✅ Success!",
                html: '<p class="swal-text">Nurse saved successfully.</p>', // Added class for styling
                icon: "success",
                confirmButtonText: "OK",
                background: "white",
                color: "black",
                confirmButtonColor: "green",
                timer: 3000, // Auto-close after 10 seconds
                width: "450px", // Small window size
                customClass: {
                    title: "swal-title",
                    popup: "swal-popup",
                    confirmButton: "swal-button",
                }
            });
            return response.data;
        }catch(error) {
            console.error("Error saving Nurse: ", error);
            Swal.fire({
                title: "Error!",
                html: '<p class="swal-text">Failed to save Nurse.</p>', // Added class for styling
                icon: "error",
                confirmButtonText: "OK",
                background: "white",
                color: "black",
                confirmButtonColor: "green",
                timer: 3000, // Auto-close after 10 seconds
                width: "420px", // Small window size
                customClass: {
                    title: "swal-title",
                    popup: "swal-popup",
                    confirmButton: "swal-button",
                }
            });
            throw error;
        }
    }
);


/*update nurse*/
export const updateCustomer = createAsyncThunk(
    'customer/updateCustomer',
    async (formData : FormData) => {
        const token = localStorage.getItem("accessToken");

        try {
            const response = await api.put(`/update/${formData.get('nurseId')}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });
            Swal.fire({
                title: "✅ Success!",
                html: '<p class="swal-text">Nurse updated successfully.</p>', // Added class for styling
                icon: "success",
                confirmButtonText: "OK",
                background: "white",
                color: "black",
                confirmButtonColor: "green",
                timer: 3000, // Auto-close after 10 seconds
                width: "450px", // Small window size
                customClass: {
                    title: "swal-title",
                    popup: "swal-popup",
                    confirmButton: "swal-button",
                }
            });
            return response.data;
        }catch (error){
            console.error("Error updating Nurse: ", error);
            Swal.fire({
                title: "❌ Error!",
                html: '<p class="swal-text">Failed to update Nurse.</p>', // Added class for styling
                icon: "error",
                confirmButtonText: "OK",
                background: "white",
                color: "black",
                confirmButtonColor: "green",
                timer: 3000, // Auto-close after 10 seconds
                width: "420px", // Small window size
                customClass: {
                    title: "swal-title",
                    popup: "swal-popup",
                    confirmButton: "swal-button",
                }
            });
            throw error;
        }
    }
);

/*delete Nurse*/
export const deleteCustomer = createAsyncThunk(
    'customer/deleteCustomer',
    async (nurseId : string) => {
        const token = localStorage.getItem("accessToken");

        const result = await Swal.fire({
            title: "⚠️ Are you sure?",
            html: '<p class="swal-text">Do you really want to delete this Nurse?</p>',
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Delete",
            cancelButtonText: "No, Cancel",
            background: "white",
            color: "black",
            confirmButtonColor: "red",
            cancelButtonColor: "gray",
            width: "450px",
            customClass: {
                title: "swal-title",
                popup: "swal-popup",
                confirmButton: "swal-button",
                cancelButton: "swal-cancel-button"
            }
        });

        if (result.isConfirmed) {
            try {
                const response = await api.delete(`/delete/${nurseId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                // Show success message
                Swal.fire({
                    title: "✅ Deleted!",
                    html: '<p class="swal-text">Successfully deleted Nurse.</p>',
                    icon: "success",
                    confirmButtonText: "OK",
                    background: "white",
                    color: "black",
                    confirmButtonColor: "green",
                    timer: 3000,
                    width: "450px",
                    customClass: {
                        title: "swal-title",
                        popup: "swal-popup",
                        confirmButton: "swal-button",
                    }
                });
                return response.data;
            }catch (error){
                // Show error message
                Swal.fire({
                    title: "❌ Error!",
                    html: '<p class="swal-text">Failed to delete Nurse.</p>',
                    icon: "error",
                    confirmButtonText: "OK",
                    background: "white",
                    color: "black",
                    confirmButtonColor: "red",
                    timer: 3000,
                    width: "450px",
                    customClass: {
                        title: "swal-title",
                        popup: "swal-popup",
                        confirmButton: "swal-button",
                    }
                });
                console.error("Error deleting Nurse:", error);
            }
        }

    }
);

/*Get Nurses*/
export const getCustomers = createAsyncThunk(
    'customer/getCustomers',
    async () => {
        const token = localStorage.getItem("accessToken");

        try {
            const response = await api.get('/view',{
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            return response.data;
        }catch (error){
            console.error("Error:", error);

        }
    }
);

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.push(action.payload);
        },

        updatedCustomer: (state, action: PayloadAction<Customer>) => {
            const index = state.findIndex(
                (customer) => customer.customerId === action.payload.customerId);

            if (index !== -1) {
                state[index] = action.payload;
            }
        },

        deletedCustomer: (state, action: PayloadAction<string>) => {
            return state.filter((customer) => customer.customerId !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveCustomer.fulfilled, (state, action) => {
                state.push(action.payload);
            })

            .addCase(saveCustomer.pending, (_, action) => {
                console.error("Pending save Nurse ",action.payload);
            })

            .addCase(saveCustomer.rejected, (_, action) => {
                console.error("Failed to save Nurse: ", action.payload);
            });

        builder
            .addCase(deleteCustomer.rejected, (_, action) => {
                console.error("Failed to delete Nurse: ", action.payload);
            })

            .addCase(deleteCustomer.pending, (_, action) => {
                console.log("Pending delete Nurse: ",action.payload);
            })

            .addCase(deleteCustomer.fulfilled, (state, action) => {
                return state = state.filter((customer:Customer)=> customer.customerId !== action.payload.customerId);
            });

        builder
            .addCase(updateCustomer.rejected, (_, action) => {
                console.error("Failed to update Customer: ", action.payload);
            })

            .addCase(updateCustomer.fulfilled, (state, action) => {
                const customer = state.find((customer:Customer) => customer.customerId === action.payload.customerId);
                if (customer) {
                    customer.customerName = action.payload.customerName;
                    customer.address = action.payload.address;
                    customer.contactNum = action.payload.contactNum;
                }
            })

            .addCase(updateCustomer.pending, (_, action) => {
                console.log("Pending update Nurse: ", action.payload);
            });

        builder
            .addCase(getCustomers.fulfilled, (_, action) => {
                return action.payload;
            })
            .addCase(getCustomers.pending, (_, action) => {
                console.log("Pending get Nurses: ", action.payload);
            })
            .addCase(getCustomers.rejected, (_, action) => {
                console.error("Failed to get Nurses: ", action.payload);
            })
    }
});
export const {addCustomer,updatedCustomer,deletedCustomer} = customerSlice.actions;
export default customerSlice.reducer;