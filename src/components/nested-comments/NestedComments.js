import CommentBox from "./CommentBox";
const data = [
  {
    username: "Shraddha",
    comment: "this is my first comment",
    replies: [
      {
        username: "Dipika",
        comment: "this is my first comment",
        replies: [
          {
            username: "Sara",
            comment: "this is my first comment",
          },
        ],
      },
    ],
  },
  {
    username: "Sara",
    comment: "this is my first comment",
    replies: [
      {
        username: "Henry",
        comment: "this is my first comment",
      },
      {
        username: "Sundar",
        comment: "this is my first comment",
      },
    ],
  },
  {
    username: "Ali",
    comment: "this is my first comment",
    replies: [
      {
        username: "Dipika",
        comment: "this is my first comment",
        replies: [
          {
            username: "Sara",
            comment: "this is my first comment",
            replies: [
              {
                username: "Dipika",
                comment: "this is my first comment",
                replies: [
                  {
                    username: "Sara",
                    comment: "this is my first comment",
                    replies: [
                      {
                        username: "Dipika",
                        comment: "this is my first comment",
                        replies: [
                          {
                            username: "Sara",
                            comment: "this is my first comment",
                            replies: [
                              {
                                username: "Dipika",
                                comment: "this is my first comment",
                                replies: [
                                  {
                                    username: "Sara",
                                    comment: "this is my first comment",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const NestedComments = () => {
    return <CommentBox data={data}/>
};

export default NestedComments;
