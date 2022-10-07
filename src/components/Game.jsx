import styled, { keyframes } from 'styled-components';


const Character = styled.div`
    width: 20px;
    height: 50px;
    background-color: red;
    position: relative;
    top: 150px;
    `

const blockAnimation = keyframes`
    0% {left: 480px;};
    100% {left: -40px;};
    `

const Block = styled.div`
    width: 20px;
    height: 20px;
    background-color: blue;
    position: relative;
    top: 130px;
    left: 480px;
    animation: ${blockAnimation} 2s infinite linear;
    `

const GameBoyContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
`

const GameBoy = styled.div`
    background-color: #cacaca;
    width: 400px;
    height: 700px;
    border-radius: 15px 15px 100px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: outset 4px #dbdbdb;
    box-shadow: 3px 3px 1px 3px #616161;
    `
const GameContainer = styled.div`
    width: 240px;
    height: 220px;
    border: 3px inset #484848;
    border-radius: 3px;
    background-color: #688a32;
    `

const SquareScreen = styled.div`
    background-color: #8a8a8a;
    width: 350px;
    height: 280px;
    border:  3px double #646464;
    border-radius: 10px 10px 50px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    `

    const LedBatteryContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100px;
        width: 50px;
    `
        const LEDlight = styled.div`
            background-color: #620000;
            width: 9px;
            height: 9px;
            border-radius: 5px;
            margin-left: 15px;
        `
        const BaterryTxt = styled.p`
            font-size: 10px;
            color: white;
            text-align: center;
        `

const ConsoleNameContainer = styled.p`
    display: flex;
    align-items: flex-end;
    width: 90%;
    margin: 0;
`

const ConsoleName1 = styled.p`
    font-family: 'Pretendo';
    color: #1a2385;
    margin: 0 5px 4px 0;
    margin-right: 5px;
`
const ConsoleName2 = styled.p`
    font-size: 28px;
    font-weight: 500;
    font-family: Verdana;
    font-stretch: condensed;
    font-style: italic;
    color: #1a2385;
    margin: 0;
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 350px;
`

const ArrowsContainer = styled.div`
    display: flex;
    align-items: center;
`

const ArrowUpDown = styled.div`
    display: flex;
    flex-direction: column;
    `

const ArrowButtons = styled.button`
    background-color: #303030;
    width: 30px;
    height: 30px;
    border: 0;
    border-radius: 3px;
    box-shadow: 3px 3px 0px 2px #242424;
`

const ButtonABContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 120px;
    transform: rotate(-30deg);

`

const ButtonAB = styled.button`
    background-color: #8d1f56;
    width: 50px;
    height: 50px;
    border: 0px;
    border-radius: 50%;
    box-shadow: -3px 3px 0px 2px #66163e;
`
const ButtonABTxt = styled.p`
    font-size: 15px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 900;
    margin: 10px 0 0 11px;
    color: #1a2385;
`

const OptionButtonsContainer = styled.div`
    height: 10px;
    width: 150px;
    display: flex;
`

const SelectStartButton = styled.button`
    background-color: #737373;
    width: 45px;
    height: 10px;
    border: 0px;
    border-radius: 5px;
    transform: rotate(-30deg);
    margin: 0 5px 0 5px;
    box-shadow: -2px 3px 0px 2px #606060;
`

const SelectStartTxt = styled.p`
    transform: rotate(-30deg);
    font-size: 12px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 900;
    margin: 2px 0 0 11px;
    color: #1a2385;
`

const StripesBigContainer = styled.div`
    display: flex;
    width: 350px;
    justify-content: flex-end;
`

const StripesContainer = styled.div`
    display: flex;
    transform: rotate(-30deg);

`
const Stripes = styled.div`
    background-color: #969696;
    width: 7px;
    height: 60px;
    border: 2px inset #787878;
    border-radius: 5px;
    margin: 0 7px 0 7px;
    
`

const Game = () => {
  return (
    <GameBoyContainer>
        <GameBoy>
            <div>
            <SquareScreen>
                <LedBatteryContainer>
                    <LEDlight>
                    </LEDlight> 
                    <BaterryTxt>BATTERY</BaterryTxt>
                </LedBatteryContainer>
                <GameContainer id="game-container">
                    <Character id="character-id"></Character>
                    <Block id="block-id"></Block>
                </GameContainer>
            </SquareScreen>
            <ConsoleNameContainer>
                <ConsoleName1>Nintendo </ConsoleName1>
                <ConsoleName2>GAME BOY</ConsoleName2>
            </ConsoleNameContainer>
            </div>
            <ButtonsContainer>
                <ArrowsContainer>
                    <ArrowButtons></ArrowButtons>
                        <ArrowUpDown>
                            <ArrowButtons></ArrowButtons>
                            <ArrowButtons></ArrowButtons>
                            <ArrowButtons></ArrowButtons>
                        </ArrowUpDown>
                    <ArrowButtons></ArrowButtons>
                </ArrowsContainer>
                <ButtonABContainer>
                    <div>
                        <ButtonAB></ButtonAB>
                        <ButtonABTxt>B</ButtonABTxt>
                    </div>
                    <div>
                        <ButtonAB></ButtonAB>
                        <ButtonABTxt>A</ButtonABTxt>
                    </div>
                </ButtonABContainer>
            </ButtonsContainer>
            <OptionButtonsContainer>
                    <div>
                        <SelectStartButton></SelectStartButton>
                        <SelectStartTxt>SELECT</SelectStartTxt>
                    </div>
                    <div>
                        <SelectStartButton></SelectStartButton>
                        <SelectStartTxt>START</SelectStartTxt>
                    </div>
            </OptionButtonsContainer>
            <StripesBigContainer>
                <StripesContainer>
                    <Stripes></Stripes>
                    <Stripes></Stripes>
                    <Stripes></Stripes>
                    <Stripes></Stripes>
                    <Stripes></Stripes>
                    <Stripes></Stripes>
                </StripesContainer>
            </StripesBigContainer>
        </GameBoy>
    </GameBoyContainer>
  );
}

export default Game;