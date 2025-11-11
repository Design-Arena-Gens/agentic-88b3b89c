export const metadata = {
  title: 'LearningNest ? Bagless Concept',
  description: 'An integrated curriculum where learning becomes joyful, smart, and mess-free.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
