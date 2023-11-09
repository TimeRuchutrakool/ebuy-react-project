import {
  ThailandAddressTypeahead,
  ThailandAddressValue,
} from "react-thailand-address-typeahead";
import { useState } from "react";

export default function Address({ val, setVal }) {
  return (
    <div className="Address flex gap-4">
      <ThailandAddressTypeahead
        value={val}
        onValueChange={(val) => setVal(val)}
      >
        <ThailandAddressTypeahead.SubdistrictInput
          className="all-input border py-1.5"
          placeholder="ที่อยู่"
        />
        <ThailandAddressTypeahead.DistrictInput
          className="all-input border py-1.5"
          placeholder="อำเภอ"
        />
        <ThailandAddressTypeahead.ProvinceInput
          className="all-input border py-1.5"
          placeholder="จังหวัด"
        />
        <ThailandAddressTypeahead.PostalCodeInput
          className="all-input border py-1.5"
          placeholder="รหัสไปรษณี"
        />
        <ThailandAddressTypeahead.Suggestion />
      </ThailandAddressTypeahead>
    </div>
  );
}
