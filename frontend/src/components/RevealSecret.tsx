import { useState } from "react";
import axios from "axios";

interface RevealSecretProps {
    keyValue: string;
    setKeyValue: (key: string) => void;
    setResult: (res: string) => void;
}

const RevealSecret = ({ keyValue, setKeyValue, setResult }: RevealSecretProps) => {
    const revealSecret = async () => {
        try {
            const res = await axios.post("http://localhost:8000/api/reveal/", { key: keyValue });
            setResult(res.data.secret || res.data.error);
            setKeyValue("");
        } catch (err) {
            console.error(err);
            setResult("Error");
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter the key to reveal"
                value={keyValue}
                onChange={(e) => setKeyValue(e.target.value)}
            />
            <button onClick={revealSecret}>REVEAL</button>
        </div>
    );
};

export default RevealSecret;
