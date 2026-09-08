# Data Sync with IBM Aspera

Use **IBM Aspera Sync** to replicate and synchronize large files and data repositories quickly and securely over wide-area networks.

!!! info "Product mapping"
    **IBM Aspera Sync** — high-speed WAN file and repository synchronization using IBM's FASP transport protocol

---

## Why It Matters

Conventional TCP-based file transfer (rsync, SFTP, FTP) degrades sharply over long distances and high-latency links. A transfer that takes minutes on a local network can take hours or days across a WAN. IBM Aspera Sync uses a purpose-built transport protocol that maintains near-wire-speed performance regardless of distance — making it practical to synchronize terabytes of data globally within predictable windows.

---

## Business Value

!!! success "Key outcomes"
    | Outcome | What It Means |
    |---|---|
    | **Shorter synchronization windows** | Move large data sets across long-distance or high-latency networks far faster than conventional TCP |
    | **Efficient change synchronization** | Recognize and transmit only changes and file-system operations — avoid unnecessary full re-transfers |
    | **Hybrid and multi-site distribution** | Keep large repositories synchronized between data centers, clouds and remote sites |
    | **Support very large scale** | Handle many small files or large multi-terabyte files depending on the workload |

---

## When to Use

Use Aspera Sync when:

- You need to synchronize **file repositories or large data sets** across WAN links.
- Conventional rsync/SFTP-style transfers cannot meet the required time window.
- Engineering, media, scientific, backup or AI training data must be distributed between locations.
- A one-to-one, one-to-many, bidirectional or mesh synchronization topology is required.

!!! warning "What this is not"
    Aspera Sync is a **file/data-set synchronization** capability. For near-real-time replication of relational database changes, use a CDC/data-replication technology such as **watsonx.data integration Data Replication** or a streaming pattern with **[IBM Confluent](../../context/real-time-streaming/index.md)**.

---

## Reference Pattern

```mermaid
flowchart LR
    A["On-prem / Site A<br/>large file repository"] <--> S["IBM Aspera Sync<br/>FASP transport"]
    S <--> B["Cloud / Site B<br/>data repository"]
    B --> P["AI / Analytics pipeline"]
```

---

## What to Demonstrate

1. Select a representative large file set.
2. Configure a source and destination synchronization relationship.
3. Run the initial synchronization and observe transfer speed vs conventional methods.
4. Modify a subset of files and run incremental synchronization.
5. Show that only changed content is synchronized.
6. Demonstrate the target data being consumed by a downstream pipeline.

---

## Design Considerations

!!! tip "Plan your topology carefully"
    - Choose topology based on ownership and conflict expectations: **unidirectional, bidirectional or mesh**.
    - Separate bulk synchronization from transactional database replication requirements.
    - Validate firewall/network policy and encryption requirements before performance testing.
    - Test with realistic file counts and sizes — many small files can behave differently from fewer very large files.
    - Define conflict and deletion handling **explicitly** for bidirectional synchronization.

---

## IBM Products Used

| Product | Role |
|---|---|
| **[IBM Aspera Sync](https://www.ibm.com/products/aspera/sync)** | High-speed WAN file and repository synchronization using FASP transport protocol |
