import { useState } from "react";
import axios from "axios";

interface HideSecretProps {
    setKey: (key: string) => void;
    setResult: (res: string) => void;
}

const HideSecret = ({ setKey, setResult }: HideSecretProps) => {
    const [secret, setSecret] = useState("");

    const hideSecret = async () => {
        try {
            const res = await axios.post("http://localhost:8000/api/hide/", { secret });
            setKey(res.data.key);
            setResult("");
            setSecret("");
        } catch (err) {
            console.error(err);
            setResult("Error");
        }
    };

    return (
        <div style={{ marginBottom: "1rem" }}>
            <textarea
                placeholder="Write your secret here"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                rows={4}
                cols={50}
            />
            <br />
            <button onClick={hideSecret}>HIDE</button>
        </div>
    );
};

export default HideSecret;
