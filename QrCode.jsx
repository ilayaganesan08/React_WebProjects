import React from "react";
import { useState, useRef} from "react";
const QrCode = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setQrdata] = useState("")
    const [qrSize, setQrsize] = useState("")

    // const qrDataRef = useRef(null);
    // const qrSizeRef = useRef(null);

    async function generateQR() {
        // const qrData = qrDataRef.current.value.trim();
        // const qrSize = qrSizeRef.current.value.trim();

        if (!qrData.trim()) {
            alert("Please enter data for QR Code.");
            return;
        }
        if (!qrSize.trim()) {
            alert("Please enter Size of QR Code.");
            return;
        }
        setLoading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        }
        catch (error) {
            console.error("Error generating QR Code", error);
        }
        finally {
            setLoading(false)
        }
    }

    function downloadQR() {
        fetch(img)
            .then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement("a")
                link.href = URL.createObjectURL(blob)
                link.download = "qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });

    }

    function currentWeburl() {
        setQrdata(window.location.href);
        // qrDataRef.current.value = window.location.href;
        setImg("");
    }


    return (
        <div className="app-container">
            <h1>QR Code Generator</h1>
            {loading && <p>Please wait...</p>}
            {img && <img src={img} alt="Qrcode" className="qr-code" />}
            <div>
                <label htmlFor="dataInput" className="input-label">Data for QR Code</label>
                <input type="text" value={qrData} id="dataInput" placeholder="Enter Data for Qr Code" onChange={(e) => setQrdata(e.target.value)} />
                <label htmlFor="sizeInput" className="input-label">Size of QR Code (e.g., 150)</label>
                <input type="text" value={qrSize} id="sizeInput" placeholder="Enter the Size of QR Code" onChange={(e) => setQrsize(e.target.value)} />
                <button className="generate" onClick={generateQR} disabled={loading}>Generate QR Code</button>
                <button className="download" onClick={downloadQR}>Download QR Code</button>
                <button className="currentURL" onClick={currentWeburl}> Current Web URL</button>
            </div>
        </div>
    )
}

export default QrCode;