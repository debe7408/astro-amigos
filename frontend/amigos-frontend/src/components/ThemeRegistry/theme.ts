import { NTR } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { colors } from "@/constants/colors";

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
