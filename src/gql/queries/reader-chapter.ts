import {gql} from "apollo-angular";

export const ReaderChapterQuery = gql`
    query ReaderChapter($chapterId: UUID!) {
        getChapterById(chapterId: $chapterId) {
            pages {
                id
                imageUrl
                number
            }
            title
            id
            number
            numberExtra
        }
    }
`;
