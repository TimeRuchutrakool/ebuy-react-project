import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mySale } from "../../services/apiUser";
import { confirmTrack} from '../../services/apiUser'


const initialState = {
    mySale :[],
    loading : false,
    error :{
        getMySale : "",
        confirmTracking : ""
    }
}

export const getMySale = createAsyncThunk ( "/user/mySale",
async (_, thunkApi)=>{
    try {
        const data = await mySale()
        console.log("data mySale =>",data)
        return data.mySale
    } catch (error) {
        toast.error("error ?");
        return thunkApi.rejectWithValue("error ?");
    }
}
)

export const confirmTracking = createAsyncThunk ("/user/track",
async (payload, thunkApi)=>{
    try {
        const update = await confirmTrack(payload)
        console.log("saleSlice===",update)
        const data = await mySale()
        return data.mySale
    } catch (error) {
        toast.error("update fail");
        return thunkApi.rejectWithValue("update fail");
    }
}
)


const mySaleSlice = createSlice({
    name : "mySale",
    initialState,
    reducers :{
        makeMySale(state){
            state.mySale = []
        }
    },
    extraReducers : (builder) =>{
        // getMysale
        builder.addCase(getMySale.pending, (state)=>{
            state.mySale =[]
            state.loading = true;
            state.error.getMySale ="";
        })
        .addCase(getMySale.fulfilled, (state,action)=>{
            state.mySale = action.payload;
            state.loading = false;
            state.error.getMySale = "";
        })
        .addCase(getMySale.rejected, (state,action)=>{
            state.mySale = []
            state.loading = true
            state.error.getMySale = action.payload
    })
        //confirmTracking
        builder.addCase(confirmTracking.pending , (state)=>{
            state.mySale =[]
            state.loading = true;
            state.error.confirmTracking =""
        })
        .addCase(confirmTracking.fulfilled, (state,action)=>{
            state.mySale = action.payload.filter( (el)=> el.id !== action.payload)
            state.loading = false
            state.error.confirmTracking = ""
        }).addCase(confirmTracking.rejected, (state,action)=>{
            state.mySale = []
            state.loading = false
            state.error.confirmTracking = action.payload
        })
    }
})

export const { makeMySale } = mySaleSlice.actions
export const mySaleReducer = mySaleSlice.reducer