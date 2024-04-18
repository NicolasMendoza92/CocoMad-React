
import { Document, Page, View, Text, PDFViewer, Font } from "@react-pdf/renderer";
import { leerDeLocalStorage } from "../../utils/localStorage";

Font.register({ family: "Inter" })
const emailInfo = leerDeLocalStorage('email') || {};

// const productsIds = emailInfo.newEmail.productsList.map(item => item.productId)
// console.log(productsIds)

const DocuPDF = () => {
    return (
        <Document>
            <Page size="A4"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "white",
                    padding: 30,
                }}>
                <View>
                    <Text style={{ color: "#3388af", fontSize: "35px" }}>Confirmación de compra</Text>
                    <Text>Hola {emailInfo.newEmail.buyerName}! Gracias por confiar en nosotros</Text>
                    <Text>Email de contacto: {emailInfo.newEmail.buyerEmail}</Text>
                    <Text>Total a pagar:{emailInfo.newEmail.totalPurchase.toFixed(2)} EUR </Text>
                    <Text>Metodo de pago:{emailInfo.newEmail.payMethod}</Text>
                    <Text>Día de entrega:{emailInfo.newEmail.deliveryDate}</Text>
                    <Text>Rango horario:{emailInfo.newEmail.deliveryHour}</Text>
                    <Text>Retira del local:{emailInfo.newEmail.pickUp}</Text>
                    <Text>Muchas Gracias</Text>
                </View>
            </Page>
        </Document>
    )
}

const PDFView = () => {

    return (
        <PDFViewer style={{ width: "100%", height: "90vh" }}>
            <DocuPDF />
        </PDFViewer>
    )
}
export default PDFView 