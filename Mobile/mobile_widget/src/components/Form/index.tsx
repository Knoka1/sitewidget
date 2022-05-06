import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { captureScreen } from "react-native-view-shot";

import { ScreenshotButton } from "../../components/ScreenshotButton";
import { SendFeedback } from "../SendFeedback";

import { FeedbackType } from "../../components/Widget";
import { feedbackTypes } from "../../utils/feedbackTypes";

import { styles } from "./styles";
import { theme } from "../../theme";

interface Props {
  feedbackType: FeedbackType;
}
export function Form({ feedbackType }: Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => setScreenshot)
      .catch((error) => console.log(error));
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight={"bold"}
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Image source={feedbackTypeInfo.image} style={styles.image} />
        <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
      </View>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo"
        placeholderTextColor={theme.colors.text_secondary}
      />
      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <SendFeedback isLoading={false} />
      </View>
    </View>
  );
}
