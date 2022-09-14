import { eventbus } from "./eventBus";

export const eventChannel = eventbus<{
  onDoneStep1: (payload) => void
}>()