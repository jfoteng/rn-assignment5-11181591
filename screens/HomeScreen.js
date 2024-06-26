import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import {
  TransactionsHistoryData,
  TransactionsHistoryDataDark,
} from "../Data/mockupData";
import { ThemeDark, ThemeLight } from "../Data/mockupData";
import { ThemeContext } from "../ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.image}
          source={require("../assets/profile.png")}
        />
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text
            style={[
              styles.userName,
              {
                color:
                  theme === "light"
                    ? ThemeLight.fontColor
                    : ThemeDark.fontColor,
              },
            ]}
          >
            Eric Atsu
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.searchContainer,
          {
            backgroundColor:
              theme === "light"
                ? ThemeLight.iconContainerColor
                : ThemeDark.iconContainerColor,
          },
        ]}
      >
        <Image
          style={styles.search}
          source={
            theme === "light"
              ? require("../assets/search.png")
              : require("../assets/search-white.png")
          }
        />
      </View>
    </View>
  );
};

const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        resizeMode="contain"
        style={styles.cardImage}
        source={require("../assets/Card.png")}
      />
    </View>
  );
};

const Transactions = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.transactions}>
      <View style={styles.transactionsContainer}>
        <View
          style={[
            styles.transactionsImageContainer,
            {
              backgroundColor:
                theme === "light"
                  ? ThemeLight.iconContainerColor
                  : ThemeDark.iconContainerColor,
            },
          ]}
        >
          <Image
            source={
              theme === "light"
                ? require("../assets/send.png")
                : require("../assets/send-white.png")
            }
            style={styles.transactionImage}
          />
        </View>
        <Text
          style={{
            marginTop: 2,
            color:
              theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
          }}
        >
          Send
        </Text>
      </View>
      <View style={styles.transactionsContainer}>
        <View
          style={[
            styles.transactionsImageContainer,
            {
              backgroundColor:
                theme === "light"
                  ? ThemeLight.iconContainerColor
                  : ThemeDark.iconContainerColor,
            },
          ]}
        >
          <Image
            source={
              theme === "light"
                ? require("../assets/recieve.png")
                : require("../assets/recieve-white.png")
            }
            style={styles.transactionImage}
          />
        </View>
        <Text
          style={{
            marginTop: 2,
            color:
              theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
          }}
        >
          Receive
        </Text>
      </View>
      <View style={styles.transactionsContainer}>
        <View
          style={[
            styles.transactionsImageContainer,
            {
              backgroundColor:
                theme === "light"
                  ? ThemeLight.iconContainerColor
                  : ThemeDark.iconContainerColor,
            },
          ]}
        >
          <Image
            source={
              theme === "light"
                ? require("../assets/loan.png")
                : require("../assets/loan-white.png")
            }
            style={styles.transactionImage}
          />
        </View>
        <Text
          style={{
            marginTop: 2,
            color:
              theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
          }}
        >
          Loan
        </Text>
      </View>
      <View style={styles.transactionsContainer}>
        <View
          style={[
            styles.transactionsImageContainer,
            {
              backgroundColor:
                theme === "light"
                  ? ThemeLight.iconContainerColor
                  : ThemeDark.iconContainerColor,
            },
          ]}
        >
          <Image
            source={
              theme === "light"
                ? require("../assets/topUp.png")
                : require("../assets/topUp-white.png")
            }
            style={styles.transactionImage}
          />
        </View>
        <Text
          style={{
            marginTop: 2,
            color:
              theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
          }}
        >
          Top Up
        </Text>
      </View>
    </View>
  );
};

const TransactionHistory = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.transactionHistory}>
      <View style={styles.transactionTitleContainer}>
        <Text
          style={[
            styles.transactionTitle,
            {
              color:
                theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
            },
          ]}
        >
          Transaction History
        </Text>
        <Text style={[{ color: "#0E50B5" }, styles.seeAll]}>Sell All</Text>
      </View>
      <FlatList
        data={
          theme === "light"
            ? TransactionsHistoryData
            : TransactionsHistoryDataDark
        }
        renderItem={({ item }) => (
          <View style={styles.transactionHistoryContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={[
                  styles.transactionHistoryImageContainer,
                  {
                    backgroundColor:
                      theme === "light"
                        ? ThemeLight.iconContainerColor
                        : ThemeDark.iconContainerColor,
                  },
                ]}
              >
                <Image
                  source={item.logo}
                  style={styles.transactionHistoryImage}
                />
              </View>
              <View style={styles.transactionHistoryNameContainer}>
                <Text
                  style={[
                    styles.transactionHistoryName,
                    {
                      color:
                        theme === "light"
                          ? ThemeLight.fontColor
                          : ThemeDark.fontColor,
                    },
                  ]}
                >
                  {item.title}
                </Text>
                <Text style={styles.transactionHistoryCategory}>
                  {item.category}
                </Text>
              </View>
            </View>
            <Text
              style={[
                styles.transactionHistoryAmount,
                {
                  color:
                    item.type === "black"
                      ? theme === "light"
                        ? "black"
                        : "white"
                      : "#4854FF",
                },
              ]}
            >
              {item.amount}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default function HomeScreen() {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[
        styles.mainContainer,
        {
          backgroundColor:
            theme === "light"
              ? ThemeLight.backgroundColor
              : ThemeDark.backgroundColor,
        },
      ]}
    >
      <StatusBar
        backgroundColor={
          theme === "light"
            ? ThemeLight.backgroundColor
            : ThemeDark.backgroundColor
        }
        barStyle={theme === "light" ? "dark-content" : "light-content"}
      />
      <Header />
      <Card />
      <Transactions />
      <TransactionHistory />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    marginRight: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    left: 8
  },
  welcomeText: {
    fontSize: 14,
    color: "gray",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    left: -18
  },
  search: {
    width: 20,
    height: 20,
  },
  card: {
    marginTop: 15,
  },
  cardImage: {
    width: "100%",
  },
  transactions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  transactionsContainer: {
    alignItems: "center",
    marginHorizontal: 28
  },
  transactionsImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    borderRadius: 22.5,
    left: 1
  },
  transactionImage: {
    width: 28,
    height: 28,
  },
  transactionHistory: {
    flex: 1,
    marginTop: 30,
    
  },
  transactionTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    left: 15
  },
  seeAll: {
    fontSize: 16,
    fontWeight: "bold",
    left: -18
    
  },
  transactionHistoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    left: 15
  },
  transactionHistoryImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  transactionHistoryNameContainer: {
    marginLeft: 10,
  },
  transactionHistoryImage: {
    width: 28,
    height: 28,
  },
  transactionHistoryName: {
    fontSize: 16,
    fontWeight: "500",
  },
  transactionHistoryCategory: {
    fontSize: 14,
    color: "gray",
  },
  transactionHistoryAmount: {
    fontSize: 16,
    color: "gray",
    fontWeight: "bold",
    left: -36
  },
});
