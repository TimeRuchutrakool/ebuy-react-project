import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import { confirmReceipt, myOrder } from "../../services/apiUser";


const initialState ={
    order : [],
    loading : false,
    error :{

    },

}

export const getMyOrder = createAsyncThunk( "/user/myOrder" ,
async (_, thunkApi)=>{
    try {
        const data = await myOrder()
        console.log("dataSlice=",data)
        return data.myOrder
    } catch (error) {
      toast.error("error ?");
      return thunkApi.rejectWithValue("error ?");
    }
})

export const confirmReceipted = createAsyncThunk("/user/confirmReceipt",
async (payload , thunkApi)=>{
    try {
        const update = await confirmReceipt(payload)
        const data = await myOrder()
        console.log("dataSlice=",data)
        return data.myOrder
    } catch (error) {
        return thunkApi.rejectWithValue("update fail");
    }
}
)


const myOrderSlice = createSlice({
    name : "myOrder",
    initialState,
    reducers :{
        makeMyOrder(state){
            state.order = []
        },
        
    },
    extraReducers :(builder) =>{
        // getMyOrder
        builder
        .addCase(getMyOrder.pending, (state)=>{
            state.order = [];
            state.loading= true;
            state.error ="";
        })
        .addCase(getMyOrder.fulfilled, (state,action)=>{
            state.order =action.payload;
            state.loading = false ;
            state.error = "";
        })
        .addCase(getMyOrder.rejected, (state,action)=>{
            state.order =[];
            state.loading = true;
            state.error = action.payload
        });
        
        //confirmReceipted
        builder.addCase(confirmReceipted.pending , (state)=>{
            state.order =[]
            state.loading = true;
            state.error =""
        })
        .addCase(confirmReceipted.fulfilled, (state,action)=>{
            state.order = action.payload.filter( (el)=> el.id !== action.payload)
            state.loading = false
            state.error = ""
        }).addCase(confirmReceipted.rejected, (state,action)=>{
            state.order = []
            state.loading = false
            state.error = action.payload
        })
    }   
})

export const { makeMyOrder } = myOrderSlice.actions
export const myOrderReducer = myOrderSlice.reducer