import "./globals.css";

export const metadata = {
    title: "Rock-paper-scissors",
    description: "A web rock-paper-scissor game",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
