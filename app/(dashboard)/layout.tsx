export const metadata = {
    title: 'Dashboard',
    description: 'Generated by create next app',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}