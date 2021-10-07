import { Global } from "@emotion/react"

const Fonts = () => (
    <Global
        styles={`
      /* latin */
      @font-face{       
        font-family:"rational-tw-semibold";
        font-display: swap;
        src: url("/fonts/rationaltw/rationaltwdisplaydemo-semibold.otf") format("opentype"),
    }
    
    @font-face{
        font-family:"rational-tw-light";
        src: url("/fonts/rationaltw/rationaltwdisplaydemo-light.otf") format("opentype"),
    }
    
    @font-face{
        font-family:"metropolis-regular";
        src: url("/fonts/metropolis/metropolis.regular.otf") format("opentype"),
    }
    
    @font-face{
        font-family:"metropolis-semibold";
        src: url("/fonts/metropolis/metropolis.semi-bold.otf") format("opentype"),
    }
    
    @font-face{
        font-family:"metropolis-thin";
        src: url("/fonts/metropolis/metropolis.thin.otf") format("opentype"),
    }
      `}
    />
)

export default Fonts