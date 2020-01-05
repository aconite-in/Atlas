import { BasePage } from "../Core/BasePage";
import { TextBox } from "../Core/WebElements/TextBox";
import { Button } from "../Core/WebElements/Button";
import { LinkLabel } from "../Core/WebElements/LinkLabel";
import { ComboBox } from "../Core/WebElements/ComboBox";


export class UploadFilePage extends BasePage {

    public FileUploadInput: TextBox = new TextBox("id", "fileSelector_html_file1")
    public FileUploadBtn: Button = new Button("id", "uploadButton");
    public ApplicationComboBox: ComboBox = new ComboBox("id", "main_content_Applications");
    public LogoutLink: LinkLabel = new LinkLabel("css", "#mainContainer > table > tbody > tr > td:nth-child(5) > a");

    constructor() {
        super("", "//*[@id='selectfilediv']");
    }

    navigateTo(): void {
        throw new Error("Method not implemented.");
    }

}