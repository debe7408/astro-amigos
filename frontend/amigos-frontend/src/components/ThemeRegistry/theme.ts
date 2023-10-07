import { Roboto, NTR } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { colors } from "@/constants/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],

  display: "swap",
});

const ntr = NTR({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ntr.style.fontFamily,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          "&:hover": {transform: "scale(1.05)"},
          transition: "transform 0.15s ease-in-out"
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: colors.primary[2],
          }),
        }),
      },
    },
  },
});

export default theme;
