import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import { confirmReceipt, myHistory, myOrder } from "../../services/apiUser";


const initialState ={
    order : [],
    loading : false,
    error :{
        getMyOrder : "",
        confirmReceipted :"",
        getHistory: ""
    },
    history :[]
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

export const getHistory = createAsyncThunk("/user/myHistory",
async (_,thunkApi)=>{
    try {
        const data = await myHistory()
        console.log("dataSlice getHistory===",data)
        return data.myHistory
    } catch (error) {
        toast.error("error ?");
      return thunkApi.rejectWithValue("error ?");
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
            state.error.getMyOrder ="";
        })
        .addCase(getMyOrder.fulfilled, (state,action)=>{
            state.order =action.payload;
            state.loading = false ;
            state.error.getMyOrder = "";
        })
        .addCase(getMyOrder.rejected, (state,action)=>{
            state.order =[];
            state.loading = true;
            state.error.getMyOrder = action.payload
        });
        
        //confirmReceipted
        builder.addCase(confirmReceipted.pending , (state)=>{
            state.order =[]
            state.loading = true;
            state.error.confirmReceipted =""
        })
        .addCase(confirmReceipted.fulfilled, (state,action)=>{
            state.order = action.payload.filter( (el)=> el.id !== action.payload)
            state.loading = false
            state.error.confirmReceipted = ""
        }).addCase(confirmReceipted.rejected, (state,action)=>{
            state.order = []
            state.loading = true
            state.error.confirmReceipted = action.payload
        })

        builder
        .addCase(getHistory.pending, (state)=>{
            state.history=[]
            state.loading=true
            state.error.getHistory = ""
        })
        .addCase(getHistory.fulfilled, (state,action)=>{
            state.history = action.payload
            state.loading = false
            state.error.getHistory = ""
        })
        .addCase(getHistory.rejected, (state,action)=>{
            state.history =[]
            state.loading =true
            state.error.getHistory = action.payload
        })
    }   
})

export const { makeMyOrder } = myOrderSlice.actions
export const myOrderReducer = myOrderSlice.reducer