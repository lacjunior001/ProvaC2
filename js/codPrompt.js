
function iniciarPrompt() {
    var coresArray = ['cor', 'cor', 'cor', 'cor', 'cor', 'cor', 'cor', 'cor', 'cor', 'cor']
    var corPC = [" "]
    var corJogador = " "
    var cont = 0
    var igual = -1
    var posiJogador = -1
    var posiPC = -1
    var dica = " "
    var exibir = document.getElementById("exibir")

    do {
        coresArray[cont] = pegarCor(coresTotais())
        igual = comparar(coresArray[cont], coresArray, cont)
        if (igual < 0 || igual == cont) {
            cont++
        }
    } while (cont < 10)


    coresArray.sort()

    corPC[0] = pegarCor(coresArray)


    do {
        corJogador = prompt("Estou Pensando em uma destas cores:\n" + coresArray + ".\nEm qual cor estou pensando?")
        igual = comparar(corJogador, corPC)

        if (igual == 0) {
            alert("Parabéns, Acertou!!\nEu pensei: " + corPC + "\nVc Digitou: " + corJogador)
            document.body.style.backgroundColor = corPC
            break

        } else {

            posiJogador = comparar(corJogador, coresArray)

            posiPC = comparar(corPC[0], coresArray)


            exibir.innerHTML = posiJogador + "--" + posiPC



            if (posiJogador > posiPC && posiJogador >= 0) {
                dica = "é maior que a minha"
            } else if (posiJogador < posiPC && posiJogador >= 0) {
                dica = "é menor que a minha"
            } else {
                dica = "não é uma das opções"
            }
            alert("Desculpe, acredito que não esteja correto!\nDica: Parece que sua cor " + dica + "!!\nTente Novamente")
        }

    } while (igual != 0)
}

function coresTotais() {
    //totalmente funcional não mexer mais
    return ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen']
}



function pegarCor(coresArray) {
    var cor = " "
    var resultado = -1
    var continuar = true
    do {
        resultado = parseInt(Math.random() * 1000)
        if (resultado < coresArray.length) {
            continuar = false
            cor = coresArray[resultado]
            break
        }
    } while (continuar)
    return cor
}

function comparar(cor, coresArray) {
    var achou;

    for (let i = 0; i < coresArray.length; i++) {
        if (cor.toUpperCase() == coresArray[i].toUpperCase()) {
            achou = i
            break
        } else {
            achou = -1
        }
    }
    return achou
}
