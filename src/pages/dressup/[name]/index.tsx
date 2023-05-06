import { useRouter } from "next/router";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { api } from "~/utils/api";
import { useMemo, useState } from "react";
//Why is update delayed
const Tracker: React.FC = ({}) => {
  const router = useRouter();
  const name = router.query.name as string;
  const [updated, setUpdated] = useState(true);
  const seenMutation = api.participant.updateSeen.useMutation({
    onSuccess: () => {
      setUpdated(true);
    },
  });
  const dressMutation = api.participant.updateParticipated.useMutation({
    onSuccess: () => {
      setUpdated(true);
    },
  });
  const checkChange = async (seen: boolean, id: number) => {
    setUpdated(false);
    return seenMutation.mutate({
      id: id,
      seen: seen,
    });
  };

  const checkChangev2 = async (dress: boolean, id: number) => {
    setUpdated(false);
    return dressMutation.mutate({
      id: id,
      dressed: dress,
    });
  };

  const [form, setForm] = useState("ALL");
  const [search, setSearch] = useState("");

  const filterParticipants = (gradeLevel: string) => {
    setForm(gradeLevel);
  };
  const { data, refetch } = api.eventInformation.getAllDressUp.useQuery();
  useMemo(() => {
    refetch();
  }, [updated]);
  if (!data) return null;
  const singleEvent = data.find((item) => item.name === name);
  if (!singleEvent)
    return (
      <div className="align-center text-center">This Event Doesn't Exist</div>
    );

  return (
    <div>
      <div className="flex h-screen w-screen flex-col items-center justify-start bg-slate-300 p-8">
        <div className="flex h-[14] w-full justify-between p-2">
          <div className="flex w-1/3 justify-start">
            <Link href="/dressup">
              <Icon
                className="h-14 w-14"
                icon="ion:arrow-back-circle-outline"
              />
            </Link>
          </div>
          <div className="flex w-1/3 items-center justify-center">
            <h1 className="heading-primary">{singleEvent.displayName}</h1>
          </div>
          <div className="flex w-1/3 justify-end">
            <Link href="/">
              <Icon className="h-14 w-14" icon="material-symbols:home" />
            </Link>
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-center p-2">
          <div className="flex h-14 w-3/4 gap-x-2">
            <div className="w-14"></div>
            <input
              className="flex h-8 w-full rounded-sm p-2 text-center"
              type="text"
              id="name"
              name="name"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <select
              className="flex h-8 w-14 rounded-sm"
              name="grade"
              id="grade"
              onChange={(e) => filterParticipants(e.target.value)}
            >
              <option value="ALL">ALL</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>
          <div className="flex h-14 w-1/2 items-end justify-between p-2">
            <h1 className="heading-sub w-1/3">Name</h1>
            <h1 className="heading-sub w-1/3">Seen</h1>
            <h1 className="heading-sub w-1/3">Participated</h1>
          </div>
          <div className="flex flex h-full w-1/2 items-start p-2">
            <div className="flex w-full flex-col items-start border-2 border-white">
              {singleEvent.participants
                .sort((a, b) => (a.seen ? 1 : 0) - (b.seen ? 1 : 0))
                .map((participant, index) =>
                  (form == "ALL" ||
                    participant.grade.toString() + "th" == form) &&
                  participant.name
                    .toLowerCase()
                    .indexOf(search.toLowerCase()) != -1 ? (
                    <div
                      className="flex w-full grid-cols-3"
                      key={participant.id}
                    >
                      <div className="w-full border-2 border-r-2 border-white bg-blue-100 p-2">
                        <h1 className="text-center">{participant.name}</h1>
                      </div>
                      <div className="w-full items-center justify-center border-2 border-b-2 border-r-2 border-white bg-blue-100 p-2">
                        <div
                          className="flex justify-center"
                          key={participant.id + "seen"}
                        >
                          {updated ? (
                            <button
                              className="flex cursor-pointer justify-center hover:shadow-black hover:drop-shadow-lg"
                              onClick={() =>
                                checkChange(!participant.seen, participant.id)
                              }
                            >
                              <input
                                type="checkbox"
                                className="h-7 w-7 cursor-pointer rounded-xl"
                                defaultChecked={participant.seen}
                              ></input>
                            </button>
                          ) : (
                            <input
                              type="checkbox"
                              className="h-7 w-7 cursor-pointer rounded-xl"
                              defaultChecked={participant.seen}
                              disabled
                            ></input>
                          )}
                        </div>
                      </div>
                      <div className="w-full justify-center border-2 border-l-2 border-white bg-blue-100 p-2">
                        <div
                          className="flex justify-center"
                          key={participant.id + "dressed"}
                        >
                          {updated ? (
                            <button
                              className="flex cursor-pointer justify-center hover:shadow-black hover:drop-shadow-lg"
                              onClick={() =>
                                checkChangev2(
                                  !participant.dressed,
                                  participant.id
                                )
                              }
                            >
                              <input
                                type="checkbox"
                                className="h-7 w-7 cursor-pointer rounded-xl"
                                defaultChecked={participant.dressed}
                              ></input>
                            </button>
                          ) : (
                            <input
                              type="checkbox"
                              className="h-7 w-7 cursor-pointer rounded-xl"
                              defaultChecked={participant.dressed}
                              disabled
                            ></input>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end">
          {updated ? (
            <div className="heading-sub w-32 rounded-lg bg-green-600 p-2 text-slate-100">
              Updated
            </div>
          ) : (
            <div className="heading-sub w-32 rounded-lg bg-rose-600 p-2 text-slate-100">
              Loading...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Tracker;
