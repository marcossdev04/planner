import { Loading } from "@/components/loading";
import { TripDetails, tripServer } from "@/server/trip-server";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

type TripData = TripDetails & { when: string };

export default function Trip() {
  const [isLoadingTrip, setIsLoadingTrip] = useState(true);
  const [tripDetails, setTripDetails] = useState({} as TripData);

  const tripId = useLocalSearchParams<{ id: string }>().id;
  console.log(tripId);

  async function getTripDetails() {
    try {
      setIsLoadingTrip(true);

      if (!tripId) {
        return router.back();
      }
      const trip = await tripServer.getById(tripId);
      console.log(trip);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingTrip(false);
    }
  }

  useEffect(() => {
    getTripDetails();
  }, []);

  if (isLoadingTrip) {
    return <Loading />;
  }

  return (
    <View className="flex-1 px-5 pt-16">
      <Text className="text-white text-2xl">Trip</Text>
    </View>
  );
}
