import React, { useEffect} from 'react'
import { View, StyleSheet,  } from 'react-native'
import { useTheme, useNavigation } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../utils/responsive"
import ZiText from '../../modules/ZiBookText'
import { useDispatch, useSelector } from "react-redux";
import { getComment, unrefetch } from '../../../redux/store/comments';
import CommentBody from './Comment/CommentBody';

export default function CommentBox({ bookId }) {
  const navigation = useNavigation()
  const { colors } = useTheme();
  const dispatch = useDispatch()

  const comments = useSelector(state => state.comments);

  let commentList = comments?.commentList;
  let isRefetching = comments?.isRefetching;

  useEffect(() => {
    if (isRefetching) {
      dispatch(getComment(bookId))
      dispatch(unrefetch())
    }
  }, [isRefetching])

  return (
    <View style={styles.commentbox}>
      <ZiText fontFamily="IRANYekanXFaNum-Medium" size="18" styles={{ color: colors.text, paddingTop: ScaledSize(10), }}>
        نظرات کاربران
      </ZiText>
      {/* Title */}
      <View style={styles.commentbox_container}>
        {commentList?.length !== 0 ? (
          <>
            {commentList?.map(comment => (
              <CommentBody key={comment.id}  {...comment} />
            ))}
          </>
        ) : (
          <>
            <ZiText fontFamily="IRANYekanXFaNum-Medium"
              size="15"
              styles={{
                color: colors.text,
                paddingTop: ScaledSize(10),
                textAlign: "center"
              }}>
              برای این کتاب نظری ثبت نشده است!
            </ZiText>
          </>
        )}
        {/* Body */}
      </View>
      {/* Comment Container */}
    </View>
    // Comment Box
  )
}

const styles = StyleSheet.create({
  commentbox: {
    paddingHorizontal: ScaledSize(20),
    marginTop: ScaledSize(20),
    paddingBottom: ScaledSize(20)
  },
  commentbox_container: {
    paddingTop: ScaledSize(20),
  },
  comment: {
    borderRadius: ScaledSize(8),
    padding: ScaledSize(15),
    marginBottom: ScaledSize(10)
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  profile: {
    flexDirection: "row",
    alignItems: "center"
  },
  img_container: {
    width: ScaledSize(30),
    height: ScaledSize(30)
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: ScaledSize(100),
  },
  rate: {
    flexDirection: "row-reverse",
    alignItems: "center"
  },
  body: {
    paddingTop: ScaledSize(20),
  },

});