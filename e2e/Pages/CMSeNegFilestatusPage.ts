import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { CMSeLoginPage } from "./CMSeLoginPage";
import { TextBox } from "../Core/WebElements/TextBox";
import { CMSeCardholderPage } from "./CMSeCardholderPage";
import { CMSeInstitutionPage } from "./CMSeInstitutionPage";
import { ComboBox } from "../Core/WebElements/ComboBox";
import { Label } from "../Core/WebElements/Label";

export class CMSeNegFilestatusPage extends BasePage {

    public InstitutionTab: Button = new Button("id", "InstitutionMenuTab");
    public CardholderTab: Button = new Button("id", "CardholderMenuTab");
    public Hotradiobutton: Button = new Button("id", "Hot");
    public Reasoncombobox: ComboBox = new ComboBox("id", "cardStatusReason");
    public Orderreplacementcardcheckbox: Button = new Button("id", "orderReplacementCard");
    public Orderpinmailercheckbox: Button = new Button("id", "optPinMailer");
    public instandcardperscheckbox: Button = new Button("id", "optExpressPrint");
    public PrefixLabel: Label = new Label("id", "newPrefixId");
    public Expfileupdatecombobox: ComboBox = new ComboBox("id", "negativeFileUpdateCode");
    public Expfileactioncombobox: ComboBox = new ComboBox("id", "negativeFileActionCode");
    public Exppurgedatetextbox: TextBox = new TextBox("id", "negativeFilePurgeDate");
    public Distregioncanadacheckbox: Button = new Button("id", "optRegionC");
    public Submitbutton: Button = new Button("id", "Submit");

    constructor() {
        //super("", "//*[contains(text(),'NEG FILE STATUS')]", undefined, "xpath"); //wait till Neg File status page is loaded
        super("", "NEG FILE STATUS", undefined, "text");
    }

    async navigateTo() {//Navigate till Cardholder Search page
        //throw new Error("Method not implemented.");
        let Cardholderpage = new CMSeCardholderPage();
        let Instpage = new CMSeInstitutionPage();
        await Instpage.CardholderTab.click();
        await Cardholderpage.InstIdtextbox.type("00547");
        await Cardholderpage.CardNumberradio.click();
        await Cardholderpage.CardNumbertextbox.type("4495480000000081");
        await Cardholderpage.NegFilestatusMenu.click();
        await this.isOpen();
    }
}