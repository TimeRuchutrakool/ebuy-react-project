import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mySale } from "../../services/apiUser";
import { confirmTrack} from '../../services/apiUser'


const initialState = {
    mySale :[],
    loading : false,
    error :{

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
        const data = await mySale()
        return data.mySale
    } catch (error) {
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
            state.error ="";
        })
        .addCase(getMySale.fulfilled, (state,action)=>{
            state.mySale = action.payload;
            state.loading = false;
            state.error = "";
        })
        .addCase(getMySale.rejected, (state,action)=>{
            state.mySale = []
            state.loading = true
            state.error = action.payload
    })

        builder.addCase(confirmTracking.pending , (state)=>{
            state.mySale =[]
            state.loading = true;
            state.error =""
        })
        .addCase(confirmTracking.fulfilled, (state,action)=>{
            state.mySale = action.payload.filter( (el)=> el.id !== action.payload)
            state.loading = false
            state.error = ""
        }).addCase(confirmTracking.rejected, (state,action)=>{
            state.mySale = []
            state.loading = false
            state.error = action.payload
        })
    }
})

export const { makeMySale } = mySaleSlice.actions
export const mySaleReducer = mySaleSlice.reducer