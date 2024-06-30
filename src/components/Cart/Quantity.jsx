import { Select } from "@chakra-ui/react";
import { useState } from "react";

const Quantity = ({ id, items, onUpdate }) => {
    const [qty, setQty] = useState(items);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);

        // Update local state immediately
        setQty(newQuantity);

        // Notify parent component (CartItem.jsx) to update quantity
        onUpdate(newQuantity);
    };

    return (
        <Select
            maxW="64px"
            aria-label="Select quantity"
            onChange={handleQuantityChange}
            value={items}
        >
            {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                    {num}
                </option>
            ))}
        </Select>
    );
};

export default Quantity;
