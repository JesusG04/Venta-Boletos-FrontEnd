// import AddToPlaylistModal from "@/components/shared/AddToPlaylistModal";
// import AudioPlayerModalLayoutTwo from "@/components/shared/AudioPlayerModalLayoutTwo";
import DeletePostModal from "@/components/shared/DeletePostModal";
import MainBody from "@/components/shared/MainBody";
import ReportModal from "@/components/shared/ReportModal";
import SharedModal from "@/components/shared/SharedModal";
import { poppins } from "@/src/utils/fonts";
import { Metadata } from "next";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/scss/scrollbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/styles/sass/main.scss"
import Loader from "./Loader";
import { AuthProvider } from "@/context/AuthProvider";


export const metadata: Metadata = {
  title:
    "Niteo",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={poppins.variable} suppressHydrationWarning>

        <AuthProvider>

          <MainBody>
            <main className="z-1">
              <Suspense fallback={<Loader />}>{children}</Suspense>
            </main>
            {/* <AudioPlayerModalLayoutTwo /> */}
          </MainBody>
          {/* <AddToPlaylistModal /> */}
          <SharedModal />
          <DeletePostModal />
          <ReportModal />
          <Toaster />
          
        </AuthProvider>
      </body>
    </html>
  );
}
