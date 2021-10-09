import React from 'react';
import './AskQuestion.scss';
import {Button} from "@wavea/ui-kit";
import {GlobalStore} from "redux-micro-frontends";
import {GlobalStoreFolders, openChatWidgetGAC} from "../../globalStoreUtils";

interface IAskQuestionProps {
}

const AskQuestion: React.FC<IAskQuestionProps> = (props) => {

    const globalStore = GlobalStore.Get();

    const handleChatWidgetOpen = () => {
        globalStore.DispatchGlobalAction(GlobalStoreFolders.ChatWidget, openChatWidgetGAC())
    }

    return (
        <div className="ask-question">
            <h6 className="text-uppercase text-center">Call Us:</h6>
            <div className="phone">+1  750 123-4567</div>
            <div className="schedule">Available 24/7</div>
            <div className="button-wrap">
                <Button onClick={handleChatWidgetOpen} label="Ask a Question" typeButton="secondary" isLarge/>
                <chat-widget></chat-widget>
            </div>
        </div>
    )
}

export default AskQuestion;
