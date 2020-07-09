export function doPost() {
  const data: SlackData = {
    text: "Hello world!!",
    response_type: "ephemeral",
  };
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  );
}

interface SlackData {
  text: string;
  response_type: "ephemeral" | "in_chanel";
}
